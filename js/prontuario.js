document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("prontuarioForm");
    const nomePacienteInput = document.getElementById("nomePaciente");
    const dataNascimentoInput = document.getElementById("dataNascimento");
    const sexoGeneroSelect = document.getElementById("sexoGenero");
    const cpfInput = document.getElementById("cpf");
    const rgInput = document.getElementById("rg");
    const estadoCivilSelect = document.getElementById("estadoCivil");
    const nacionalidadeInput = document.getElementById("nacionalidade");
    const enderecoInput = document.getElementById("endereco");
    const telefoneInput = document.getElementById("telefone");
    const emailInput = document.getElementById("email");
    const historicoInput = document.getElementById("historico");
    const alergiasInput = document.getElementById("alergias");
    const medicamentosInput = document.getElementById("medicamentos");
    const convenioInput = document.getElementById("convenio");
    const numeroCarteiraInput = document.getElementById("numeroCarteira");
    const contatoEmergenciaInput = document.getElementById("contatoEmergencia");
    const prontuariosLista = document.getElementById("prontuariosLista");
  
    // Carregar prontuários armazenados
    const prontuariosCadastrados = JSON.parse(localStorage.getItem("prontuarios")) || [];
  
    const atualizarListaProntuarios = () => {
      prontuariosLista.innerHTML = "";
      prontuariosCadastrados.forEach((prontuario, index) => {
        const li = document.createElement("li");
        li.textContent = `${prontuario.nomePaciente} - CPF: ${prontuario.cpf} - Estado Civil: ${prontuario.estadoCivil}`;
  
        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.classList.add("remover-btn");
        removerBtn.onclick = () => {
          prontuariosCadastrados.splice(index, 1);
          localStorage.setItem("prontuarios", JSON.stringify(prontuariosCadastrados));
          atualizarListaProntuarios();
        };
  
        li.appendChild(removerBtn);
        prontuariosLista.appendChild(li);
      });
    };
  
    // Chama a função para atualizar a lista de prontuários quando a página carregar
    atualizarListaProntuarios();
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nomePaciente = nomePacienteInput.value.trim();
      const dataNascimento = dataNascimentoInput.value;
      const sexoGenero = sexoGeneroSelect.value;
      const cpf = cpfInput.value.trim();
      const rg = rgInput.value.trim();
      const estadoCivil = estadoCivilSelect.value;
      const nacionalidade = nacionalidadeInput.value.trim();
      const endereco = enderecoInput.value.trim();
      const telefone = telefoneInput.value.trim();
      const email = emailInput.value.trim();
      const historico = historicoInput.value.trim();
      const alergias = alergiasInput.value.trim();
      const medicamentos = medicamentosInput.value.trim();
      const convenio = convenioInput.value.trim();
      const numeroCarteira = numeroCarteiraInput.value.trim();
      const contatoEmergencia = contatoEmergenciaInput.value.trim();
  
      if (nomePaciente && cpf && estadoCivil && nacionalidade && endereco && telefone && email) {
        const novoProntuario = {
          nomePaciente,
          dataNascimento,
          sexoGenero,
          cpf,
          rg,
          estadoCivil,
          nacionalidade,
          endereco,
          telefone,
          email,
          historico,
          alergias,
          medicamentos,
          convenio,
          numeroCarteira,
          contatoEmergencia,
        };
  
        prontuariosCadastrados.push(novoProntuario);
        localStorage.setItem("prontuarios", JSON.stringify(prontuariosCadastrados));
  
        // Atualiza a lista de prontuários
        atualizarListaProntuarios();
  
        // Limpa o formulário
        form.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  });
  