This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Encrypt & Decrypt env files

Make sure to have HashiCorp Vault CLI installed, otherwise [install it here](https://developer.hashicorp.com/vault/tutorials/hcp-vault-secrets-get-started/hcp-vault-secrets-install-cli)

Preparation

```bash
$ vlt config
```

Encryption example

```bash
$ openssl enc -aes-256-cbc -pbkdf2 -iter 1000000 -md sha512 -salt -pass pass:`vlt secrets get --plaintext messenger` -in env-files/.env.dev -out env-files/.env.dev.enc
```

Decryption example

```bash
$ openssl enc -d -aes-256-cbc -pbkdf2 -iter 1000000 -md sha512 -salt -pass pass:`vlt secrets get --plaintext messenger` -in env-files/.env.dev.enc -out env-files/.env.dev
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
