import type { Config } from "@react-router/dev/config";
import "react-router";


export default {
  ssr: true,
  future: {
    unstable_middleware: true,
    unstable_optimizeDeps: false,
    unstable_splitRouteModules: false,
    unstable_viteEnvironmentApi: false,
  },
} satisfies Config;

declare module "react-router" {
  interface Future {
    unstable_middleware: true;
  }
}