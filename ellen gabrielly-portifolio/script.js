function scrollToSection(event, sectionId) {
    event.preventDefault();  // Impede o comportamento padrão do link (navegação)

    // Obtém a seção com o ID especificado
    const section = document.getElementById(sectionId);

    // Usa o método scrollIntoView para rolar suavemente até a seção
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
