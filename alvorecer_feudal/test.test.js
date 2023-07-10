const adicionarPatacas = require('./src/Screen/Admin/AdminMenu/ConstrutoresReino/DetalhesConstrutor/functions')

test('Testando atribuição de pataca de 50 patacas antigas, para 150 patacas', ()=>{
    expect(adicionarPatacas(50, 100)).toBe(150);
})

test('Testando atribuição de pataca com valor antigo de 150, e valor de soma 10', ()=>{
    expect(adicionarPatacas(150, 10)).toBe(160);
})

test('Testando atribuição de pataca com valor antigo de 20, e valor de soma 90', ()=>{
    expect(adicionarPatacas(20, 90)).toBe(110);
})

test('Testando atribuição de pataca com valor antigo de 20,5, e valor de soma 10,1', ()=>{
    expect(adicionarPatacas(20.5, 10.1)).toBe(30.6);
})