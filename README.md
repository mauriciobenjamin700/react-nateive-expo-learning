# Minha Saga Aprendendo React Native

## Instalações

Expo

```bash
sudo npm i -g expo-cli
```

Instale manualmente em sua maquina o Android Studio para poder Visualizar os resultados do Seu Desenvolvimento

## Criando um Projeto

```bash
npx create-expo-app@latest .
```

Obs: Pode-se usar o comando `npm run reset-project` para deixar o projeto em seu estado genérico

## Iniciando o Projeto

Execute no terminal

```bash
npx expo start
```

Obs: Caso seu android studio não esteja configurado, siga esse passo a passo

- abra um terminal e execute: `nano ~/.bashrc`
- adicione no final do arquivo o seguinte código

```bash
export ANDROID_HOME=/home/YOUR_USER_NAME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

- Pressione Ctrl + O (isso é a letra "O", não o número zero) para salvar o arquivo.
- Pressione Enter para confirmar o nome do arquivo e salvar.
- Pressione Ctrl + X para sair do nano.
- Execute no terminal `source ~/.bashrc`
- Execute no terminal `echo $ANDROID_HOME` e caso o resultado seja igual ao que você salvou no nano, deu certo!

## Material de Apoio

- [1 - Criar App Delivery com React Native + TailwindCSS](https://www.youtube.com/watch?v=aABUs_L4AZg)

## Fluxo de Estudos

- Dia 01: Parei na aula 2 do curso `Jovem Programador` as 06:31 e percebi que o conteúdo está bem desatualizado com o expo de 2024
- Dia 02: Comecei um projeto seguindo o material de apoio 1 e parei nos 5:26 após conseguir configurar o android studio e perceber que o PC não aguenta
- Dia 03: Configurei o tailwindcss e parei aos 9:30.
