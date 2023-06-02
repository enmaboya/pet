import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path/posix";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
            app: path.resolve(options.paths.src, 'app'),
            pages: path.resolve(options.paths.src, 'pages'),
            shared: path.resolve(__dirname, 'shared'),
        }
    }
}
