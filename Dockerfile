FROM node:24.12.0-alpine

ENV PNPM_HOME="$HOME/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI="true"
# RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

WORKDIR /app
COPY . .
RUN corepack enable pnpm
RUN corepack use pnpm@latest-10
RUN pnpm install --prod

ENTRYPOINT ["pnpm", "start"]
