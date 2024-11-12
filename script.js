
function calculateTotal() {
    const prices = document.querySelectorAll('.prices'); 
    let total = 0;

    
    prices.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) { 
            total += price;
        }
    });

    
    displayTotal(total);
}


function displayTotal(total) {
    const table = document.getElementById('grocery-table').getElementsByTagName('tbody')[0];
    
   
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    
    const newRow = document.createElement('tr');
    newRow.classList.add('total-row'); 

    
    const totalLabelCell = document.createElement('td');
    totalLabelCell.textContent = 'Total Price'; 
    newRow.appendChild(totalLabelCell);
    
    const totalValueCell = document.createElement('td');
    totalValueCell.textContent = total.toFixed(2); 
    newRow.appendChild(totalValueCell);

   
    table.appendChild(newRow);
}


document.addEventListener('DOMContentLoaded', calculateTotal);


document.querySelectorAll('.prices').forEach(priceElement => {
    priceElement.addEventListener('input', calculateTotal); 
});
