$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
        event.preventDefault();
        
        // Recuperar o valor do campo de entrada
        var taskName = $('#taskInput').val();
        
        // Verificar se o campo não está vazio
        if (taskName) {
            // Adicionar a nova tarefa à lista
            $('#taskList').append('<li>' + taskName + ' <button class="remove"><i class="fas fa-trash-alt"></i></button></li>');
            
            // Limpar o campo de entrada
            $('#taskInput').val('');
        }
    });

    // Delegar o evento de clique aos itens da lista para marcar como completados
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Delegar o evento de clique aos botões de remover
    $('#taskList').on('click', '.remove', function(event) {
        event.stopPropagation();
        $(this).parent().remove();
    });
});
