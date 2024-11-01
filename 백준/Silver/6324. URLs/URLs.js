const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(x => x.trim())

function solution([n, ...args]) {
  const DEFAULT = '<default>'
  const separateHostAndPort = (hostAndPort) => {
    const split = hostAndPort.split(':')
    if (split.length === 2) {
      return split
    } else {
      return [split[0], DEFAULT]
    }
  }
  const parse = (url) => {
    const result = {}
    if (url.startsWith('ftp://')) {
      result.protocol = 'ftp'
      url = url.replace('ftp://', '')
    } else if (url.startsWith('http://')) {
      result.protocol = 'http'
      url = url.replace('http://', '')
    } else if (url.startsWith('gopher://')) {
      result.protocol = 'gopher'
      url = url.replace('gopher://', '')
    }
    const slashIndex = url.indexOf('/')
    if (slashIndex !== -1) { // path 존재
      const hostAndPort = url.slice(0, slashIndex)
      const [host, port] = separateHostAndPort(hostAndPort)
      const path = url.slice(slashIndex + 1)
      result.host = host
      result.path = path
      result.port = port
    } else { // path 없음
      const [host, port] = separateHostAndPort(url)
      result.path = DEFAULT
      result.host = host
      result.port = port
    }
    return result
  }
  const answers = []
  for (let i = 0; i < args.length; i++) {
    const url = args[i]
    const result = parse(url)
    let answer = `URL #${i + 1}
Protocol = ${result.protocol}
Host     = ${result.host}
Port     = ${result.port}
Path     = ${result.path}
`

    console.log(answer)
  }
}

solution(input);
