import { PassThrough } from "node:stream";

import {
  unstable_RouterContextProvider,
  type EntryContext,
} from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import type { RenderToPipeableStreamOptions } from "react-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import { I18nextProvider } from "react-i18next";
import { getInstance } from "./middleware/i18next";
import i18next from "i18next";

// export const streamTimeout = 5_000;

// export default function handleRequest(
//   request: Request,
//   responseStatusCode: number,
//   responseHeaders: Headers,
//   entryContext: EntryContext,
//   routerContext: unstable_RouterContextProvider
// ) {
//   return new Promise((resolve, reject) => {
//     let shellRendered = false;
//     let userAgent = request.headers.get("user-agent");

//     let readyOption: keyof RenderToPipeableStreamOptions =
//       (userAgent && isbot(userAgent)) || entryContext.isSpaMode
//         ? "onAllReady"
//         : "onShellReady";

//     let { pipe, abort } = renderToPipeableStream(
//       <I18nextProvider i18n={getInstance(routerContext)}>
//         <ServerRouter context={entryContext} url={request.url} />
//       </I18nextProvider>,
//       {
//         [readyOption]() {
//           shellRendered = true;
//           let body = new PassThrough();
//           let stream = createReadableStreamFromReadable(body);

//           responseHeaders.set("Content-Type", "text/html");

//           resolve(
//             new Response(stream, {
//               headers: responseHeaders,
//               status: responseStatusCode,
//             })
//           );

//           pipe(body);
//         },
//         onShellError(error: unknown) {
//           reject(error);
//         },
//         onError(error: unknown) {
//           responseStatusCode = 500;
//           if (shellRendered) console.error(error);
//         },
//       }
//     );

//     setTimeout(abort, streamTimeout + 1000);
//   });
// }

// handleRequest.ts
// entry.server.tsx

// import { PassThrough } from "node:stream";
// import { createReadableStreamFromReadable } from "@react-router/node";
// import { ServerRouter, type EntryContext, unstable_routerContext } from "react-router";
// import { renderToPipeableStream, type RenderToPipeableStreamOptions } from "react-dom/server";
// import { isbot } from "isbot";
// import { I18nextProvider } from "react-i18next";
// import i18next from "./middleware/i18next"; // <- pastikan i18n instance valid

const streamTimeout = 5000;

/**
 * Netlify requires this to inject a Map<unstable_routerContext, unknown>
 */
export function getLoadContext(): Map<any, any> {
  return new Map([[unstable_RouterContextProvider, i18next]]);
}

export default function handleRequest(
  request: Request,
  statusCode: number,
  headers: Headers,
  context: EntryContext
): Promise<Response> {
  const loadContext = getLoadContext();
  const i18nInstance = loadContext.get(unstable_RouterContextProvider);

  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get("user-agent");

    const readyOption: keyof RenderToPipeableStreamOptions =
      (userAgent && isbot(userAgent)) || context.isSpaMode
        ? "onAllReady"
        : "onShellReady";

    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={i18nInstance}>
        <ServerRouter context={context} url={request.url} />
      </I18nextProvider>,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          headers.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              status: statusCode,
              headers,
            })
          );

          pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          statusCode = 500;
          if (shellRendered) console.error(err);
        },
      }
    );

    setTimeout(abort, streamTimeout + 1000);
  });
}

