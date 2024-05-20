<h1>Controle de Ponto</h1>

<p>Esta é uma aplicação de controle de ponto desenvolvida com Next.js, React, TypeScript, Tailwind CSS e Prisma. O projeto segue os princípios SOLID</p>

<h2>🚀 Tecnologias: </h2>

 <div style="display: inline_block"><br>
    <a href="https://nextjs.org/" target="_BLANK">
        <img align="center" alt="Next.js" height="70" width="70" src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png">
    </a> 
    <a href="https://reactjs.org/" target="_BLANK">
        <img align="center" alt="React" height="70" width="80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png">
    </a> 
    <a href="https://www.typescriptlang.org/" target="_BLANK">
        <img align="center" alt="TypeScript" height="70" width="70" src="https://i.imgur.com/UIp79so.png">
    </a> 
    <a href="https://tailwindcss.com/" target="_BLANK">
        <img align="center" alt="Tailwind CSS" height="70" width="70" src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxy1c2bvl6odeo52dodk.jpg">
    </a>
    <a href="https://eslint.org/" target="_BLANK">
        <img align="center" alt="ESLint" height="70" width="100" src="https://e7.pngegg.com/pngimages/518/938/png-clipart-eslint-logo-tech-companies.png">
    </a>
    <a href="https://prettier.io/" target="_BLANK">
        <img align="center" alt="Prettier" height="70" width="70" src="https://w7.pngwing.com/pngs/164/151/png-transparent-prettier-hd-logo.png">
    </a>
    <a href="https://prettier.io/" target="_BLANK">
        <img align="center" alt="Prettier" height="70" width="70" src="https://w7.pngwing.com/pngs/152/247/png-transparent-jest-hd-logo.png">
    </a>
</div>

<h2>🚀 Funcionalidades: </h2>
<ul>
 <li>
  Registro de horarios de entrada e saida
 </li>
 <li>
  Consulta de horarios anteriores (horarios de entrada e saida) 
 </li>
 <li>
  Cadastro e login de usuarios
 </li>
 <li>
  Alertas de sucesso e erro com SweetAlert2
 </li>
</ul>
    
<h3>Times: </h3>
<ul>
 <li>
  id
 </li>
 <li>
  usuarioId
 </li>
 <li>
  horarioEntrada
 </li>
 <li>
  horarioSaida
 </li>
</ul>

<h2>🚀 Como Rodar os testes: </h2>
<h3>User Test: </h3>
<ul>
 <li>
  Comando: npm run test -- src/tests/usuarios/userController.test.ts
 </li>
</ul>

<h3>Times Test: </h3>
<ul>
 <li>
  Comando: npm run test -- src/tests/entradas/timesController.test.ts
 </li>
</ul>

<h2>🚀 Como Rodar a aplicacao: </h2>
<ul>
 <li>
  npm install
 </li>
 <li>
  cd src/shared/infra
 </li>
 <li>
  npx prisma generate
 </li>
 <li>
  cd ../../..
 </li>
 <li>
  npm run start:dev
 </li>
</ul>
