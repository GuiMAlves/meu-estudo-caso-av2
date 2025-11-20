# 📦 Projeto Listagem de Alunos (Web & Mobile)

Este projeto consiste na criação de duas interfaces — **Web** e **Mobile** — que apresentam uma **listagem de alunos** e permitem visualizar **detalhes individuais** de cada item. A aplicação possui navegação simples e intuitiva entre as telas, construída com tecnologias modernas para ambas as plataformas.

---

## 🚀 Funcionalidades

### 🖥️ Web
- Página inicial exibindo a listagem de alunos  
- Botão para visualizar detalhes de cada aluno  
- Interface criada com React + Vite + Bootstrap  

### 📱 Mobile
- Tela inicial listando todos os alunos  
- Navegação para a tela de detalhes  
- Construído com React Native + Expo + React Navigation  

---

## 🛠️ Tecnologias Utilizadas

### **Web**
- React  
- Vite  
- Bootstrap  
- React Router DOM  

### **Mobile**
- React Native  
- Expo  
- React Navigation  

---

## 📂 Estrutura de Telas

### 🔹 **Listagem (Listar)**
Exibe todos os alunos disponíveis.

### 🔹 **Detalhes**
Mostra as informações completas sobre o aluno selecionado.

Ambas as telas estão disponíveis em **Web** e **Mobile**, mantendo semelhança visual e funcional.

---

## 🏗️ Instalação & Execução

## 🌐 **WEB**

### 📦 Instalação
```bash
cd web
npm install

### 📦 Execução
npm run dev

### 📦 Teste
npx vitest

## 🧭 Rotas Complementares

A aplicação utiliza duas rotas principais:

/ – Apresenta a listagem completa de produtos (essa rota é somente para o WEB)

/listar – Apresenta a listagem completa de produtos (essa rota é somente para o mobile)

/alunos/:id – Exibe as informações detalhadas de um produto específico

Essas rotas existem tanto na versão Web quanto na Mobile, cada uma adaptada ao seu ambiente.

📌 Observações

A estrutura do projeto foi pensada para manter paralelismo entre as versões Web e Mobile.

Cada plataforma utiliza seu sistema de navegação mais apropriado (React Router DOM para Web, React Navigation para Mobile).