document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let hasError = false;
  
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const nomeError = document.getElementById('nome-error');
    const telefoneError = document.getElementById('telefone-error');
    const emailError = document.getElementById('email-error');
    const mensagemError = document.getElementById('mensagem-error');
  
    var inputNome = document.querySelector("#nome");
    
    function validateNome() {
        const nomeValue = nomeInput.value.trim();
      
        if (nomeValue === '') {
          nomeError.textContent = 'O campo de nome não pode estar vazio.';
          nomeError.style.color = 'red';
          nomeInput.style.borderColor = 'red';
          hasError = true;
        } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeValue)) {
          nomeError.textContent = 'Por favor, preencha apenas com letras e acentos.';
          nomeError.style.color = 'red';
          nomeInput.style.borderColor = 'red';
          hasError = true;
        } else if (/\d/.test(nomeValue)) {
          nomeError.textContent = 'Por favor, remova os números do nome.';
          nomeError.style.color = 'red';
          nomeInput.style.borderColor = 'red';
          hasError = true;
        } else if (nomeValue.length < 3) {
          nomeError.textContent = 'Digite um nome válido.';
          nomeError.style.color = 'red';
          nomeInput.style.borderColor = 'red';
          hasError = true;
        } else {
          nomeError.textContent = '';
          nomeError.style.color = '';
          nomeInput.style.borderColor = '';
          hasError = false;
        }
      }
  
    nomeInput.addEventListener('blur', validateNome);
    nomeInput.addEventListener('input', validateNome);
  
    inputNome.addEventListener("keypress", function (e) {
      var keyCode = (e.keyCode ? e.keyCode : e.which);
  
      if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
      }
    });
  
    function validateTelefone() {
      const telefoneValue = telefoneInput.value.trim();
  
      if (telefoneValue === '') {
        telefoneError.textContent = 'Por favor, preencha um telefone válido.';
        telefoneError.style.color = 'red';
        telefoneInput.style.borderColor = 'red';
        hasError = true;
      } else if (!/^\(\d{2}\)\s\d{4}-\d{4}$/.test(telefoneValue)) {
        telefoneError.textContent = 'Por favor, preencha um telefone válido no formato (00) 0000-0000.';
        telefoneError.style.color = 'red';
        telefoneInput.style.borderColor = 'red';
        hasError = true;
      } else {
        telefoneError.textContent = '';
        telefoneError.style.color = '';
        telefoneInput.style.borderColor = '';
      }
    }
  
    telefoneInput.addEventListener('input', function (event) {
      const telefoneValue = telefoneInput.value.replace(/\D/g, '');
      const formattedValue = formatarTelefone(telefoneValue);
      telefoneInput.value = formattedValue;
    });
  
    function formatarTelefone(telefone) {
      const formattedTelefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
      return formattedTelefone;
    }
  
    telefoneInput.addEventListener('blur', validateTelefone);
  
    function validateEmail() {
      const emailValue = emailInput.value.trim();
  
      if (emailValue === '') {
        emailError.textContent = 'Por favor, preencha um email válido.(contato@paak.com)';
        emailError.style.color = 'red';
        emailInput.style.borderColor = 'red';
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = 'Por favor, preencha um email válido.';
        emailError.style.color = 'red';
        emailInput.style.borderColor = 'red';
        hasError = true;
      } else {
        emailError.textContent = '';
        emailError.style.color = '';
        emailInput.style.borderColor = '';
  
      
      }
    }
  
    emailInput.addEventListener('blur', validateEmail);
  
    document.addEventListener('click', function (event) {
      if (event.target !== emailInput) {
        if (emailInput.value.trim() === '') {
          emailError.textContent = 'Por favor, preencha um email válido.(contato@paak.com)';
          emailError.style.color = 'red';
          emailInput.style.borderColor = 'red';
          hasError = true;
        }
      }
    });
  
    function validateMensagem() {
      const mensagemValue = mensagemInput.value.trim();
  
      if (mensagemValue === '') {
        mensagemError.textContent = 'Por favor, preencha uma mensagem.';
        mensagemError.style.color = 'red';
        mensagemInput.style.borderColor = 'red';
        hasError = true;
      } else if (mensagemValue.length < 20) {
        mensagemError.textContent = 'A mensagem deve ter no mínimo 20 caracteres.';
        mensagemError.style.color = 'red';
        mensagemInput.style.borderColor = 'red';
        hasError = true;
      } else {
        mensagemError.textContent = '';
        mensagemError.style.color = '';
        mensagemInput.style.borderColor = '';
        hasError = false;
      }
    }
  
    mensagemInput.addEventListener('blur', validateMensagem);
    mensagemInput.addEventListener('input', function () {
      mensagemError.textContent = '';
      mensagemError.style.color = '';
      mensagemInput.style.borderColor = '';
    });
  
    document.addEventListener('click', function (event) {
      if (event.target !== mensagemInput) {
        if (mensagemInput.value.trim() === '') {
          mensagemError.textContent = 'Por favor, preencha uma mensagem.';
          mensagemError.style.color = 'red';
          mensagemInput.style.borderColor = 'red';
          hasError = true;
        }
      }
    });
  
    validateNome();
    validateTelefone();
    validateEmail();
    validateMensagem();
    if (!hasError) {
        if (!hasError) {
          document.getElementById('success-message').textContent = 'Mensagem enviada com sucesso!';
          document.getElementById('success-message').style.color = 'green';
          document.getElementById('success-message').style.display = 'block';
          document.getElementById('success-message').style.textAlign = 'center';
         
      
          const form = document.querySelector('.form');
          form.reset(); // Limpa o formulário após o envio bem-sucedido
        }
      } else {
        document.getElementById('success-message').style.display = 'none';
      }
  });
  