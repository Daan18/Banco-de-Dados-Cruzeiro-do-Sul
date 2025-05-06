// Mostrar área de login/cadastro
document.getElementById('loginIcon').addEventListener('click', () => {
  const container = document.getElementById('loginContainer');
  container.classList.toggle('hidden');
  showLogin(); // Sempre começa com o login visível
});

// Cadastro
function register() {
  const user = document.getElementById('newUser').value;
  const password = document.getElementById('newPassword').value;

  if (!user || !password) {
    showMessage('Preencha todos os campos.');
    return;
  }

  if (localStorage.getItem(user)) {
    showMessage('Usuário já existe.');
  } else {
    localStorage.setItem(user, password);
    showMessage('Cadastro realizado com sucesso!');
    showLogin();
  }
}

// Login
function login() {
  const user = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPassword').value;
  const storedPassword = localStorage.getItem(user);

  if (!storedPassword) {
    showMessage('Usuário não encontrado.');
  } else if (storedPassword === password) {
    showMessage(`Bem-vindo, ${user}!`);
  } else {
    showMessage('Senha incorreta.');
  }
}

// Alternar visibilidade entre login e cadastro
function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
  clearMessage();
}

function showRegister() {
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  clearMessage();
}

// Mostrar e limpar mensagens
function showMessage(text) {
  document.getElementById('message').innerText = text;
}

function clearMessage() {
  document.getElementById('message').innerText = '';
}
