document.getElementById('contribution-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const government = document.getElementById('government').value;
    const description = document.getElementById('description').value;

    const contributionItem = document.createElement('li');
    contributionItem.textContent = `${name} contributed to ${government}: ${description}`;

    document.getElementById('list').appendChild(contributionItem);

    // Clear form fields
    document.getElementById('contribution-form').reset();
});
