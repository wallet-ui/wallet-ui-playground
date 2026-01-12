import { type ClusterUrl, createEmptyClient, createSolanaRpc, createSolanaRpcSubscriptions } from '@solana/kit'

export type CreateSolanaClientOptions<T extends ClusterUrl> = PluginHttpOptions<T> & Partial<PluginWsOptions<T>>
export function createSolanaClient<T extends ClusterUrl = string>({
  http,
  httpOptions,
  ws,
  wsOptions,
}: CreateSolanaClientOptions<T>) {
  if (!http.startsWith('http')) {
    throw new Error('Invalid url: ' + http)
  }
  if (ws?.trim().length && !ws.startsWith('ws')) {
    throw new Error('Invalid subscription url')
  }
  if (http.endsWith(':8899')) {
    ws = http.replace(':8899', ':8900').replace('http', 'ws') as T
  }
  return createEmptyClient()
    .use(pluginHttp<T>({ http, httpOptions }))
    .use(pluginWs<T>({ ws: ws?.length ? ws : (http.replace('http', 'ws') as T), wsOptions }))
}

interface PluginWsOptions<T extends ClusterUrl> {
  ws: T
  wsOptions?: Parameters<typeof createSolanaRpcSubscriptions<T>>[1]
}

function pluginWs<T extends ClusterUrl>({ ws, wsOptions }: PluginWsOptions<T>) {
  return <C extends object>(extending: C) => ({
    ...extending,
    rpcSubscriptions: createSolanaRpcSubscriptions<T>(ws, wsOptions),
  })
}

interface PluginHttpOptions<T extends ClusterUrl> {
  http: T
  httpOptions?: Parameters<typeof createSolanaRpc<T>>[1]
}

function pluginHttp<T extends ClusterUrl>({ http, httpOptions }: PluginHttpOptions<T>) {
  return <C extends object>(extending: C) => ({
    ...extending,
    rpc: createSolanaRpc<T>(http, httpOptions),
  })
}
