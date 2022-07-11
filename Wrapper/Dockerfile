FROM ptrthomas/karate-chrome

# 「NO_PUBKEY 4EB27DB2A3B88B8B」エラーが出たので、この行で対処
RUN  apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 4EB27DB2A3B88B8B

# 日本語のために、fonts-takao、fonts-takao-gothicとfonts-takao-minchoをインストール。
RUN apt-get update && apt-get install -y --no-install-recommends \
  fonts-takao \
  fonts-takao-gothic \
  fonts-takao-mincho

# Proxy設定のあるファイルで元のを上書き
COPY supervisord.conf /etc
