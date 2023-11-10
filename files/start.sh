#!/usr/bin/bash
#定义哪吒变量参数
export NEZHA_SERVER="nezha.nihaoaaaa.tk"
export NEZHA_PORT="443"  #当端口设置为443时，自动开启TLS,无需设置
export NEZHA_KEY="P6crhkKHxrLlRqbKRL"


chmod +x server start.sh
if [ "$NEZHA_PORT" = 443 ]; then
  NEZHA_TLS="--tls"
else
  NEZHA_TLS=""
fi
nohup ./server -s ${NEZHA_SERVER}:${NEZHA_PORT} -p ${NEZHA_KEY} ${NEZHA_TLS} > /dev/null 2>&1 &

tail -f /dev/null