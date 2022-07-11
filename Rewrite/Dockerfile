FROM azul/zulu-openjdk-debian:11.0.15

# このDockerfileは、Karateの作成者が作ったContainerを元に作ったものです。
# 元のDockerfileは以下のURLから確認できます。
# https://github.com/intuit/karate/tree/master/karate-docker/karate-chrome

ENV TZ=Asia/Tokyo \
    LANG=ja_JP.UTF-8 \
    LC_ALL=ja_JP.UTF-8

# 各パッケージをインストール。
# 日本語のために、fonts-takao、fonts-takao-gothicとfonts-takao-minchoをインストール。
RUN  apt-get update && apt-get install -y --no-install-recommends \
  curl \
  xvfb \
  x11vnc \
  eterm \
  fluxbox \
  wmctrl \
  supervisor \
  socat \
  ffmpeg \
  locales \
  locales-all \
  fonts-takao \
  fonts-takao-gothic \
  fonts-takao-mincho

# Check available versions here: https://www.ubuntuupdates.org/package/google_chrome/stable/main/base/google-chrome-stable
ARG APP_VERSION="103.0.5060.114-1"
RUN curl --no-verbose -o /tmp/chrome.deb \
  https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${APP_VERSION}_amd64.deb \
  && apt update --yes \
  && apt upgrade --yes \
  && apt install -y /tmp/chrome.deb \
  && rm /tmp/chrome.deb

RUN useradd chrome --shell /bin/bash --create-home \
  && usermod -a -G sudo chrome \
  && echo 'ALL ALL = (ALL) NOPASSWD: ALL' >> /etc/sudoers \
  && echo 'chrome:karate' | chpasswd

RUN apt-get clean \
  && rm -rf /var/cache/* /var/log/apt/* /var/lib/apt/lists/* /tmp/* \
  && mkdir ~/.vnc \
  && x11vnc -storepasswd karate ~/.vnc/passwd \
  && locale-gen ${LANG} \
  && dpkg-reconfigure --frontend noninteractive locales \
  && update-locale LANG=${LANG}

COPY supervisord.conf /etc
COPY entrypoint.sh /

CMD ["/bin/bash", "/entrypoint.sh"]