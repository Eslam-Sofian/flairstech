class ShoppingPage {
    AddToCart(FProductNo) {
        cy.get("div[data-catalog='true']>article:nth-of-type(" + FProductNo + ')').click()
        cy.get("form[id='add-to-cart']>button[type='button'][name='action']").click()
    }
    AddMoreQuantity() {
        cy.get("button[type='button'][aria-label='increase cart quantity']").click()
    }
    OpenCart() {
        cy.get('a.-df.-i-ctr.-gy9.-hov-or5.-phs').click()
    }
    CheckCartItemsNo() {
        cy.get('a.-df.-i-ctr.-gy9.-hov-or5.-phs').click()
        return cy.get('span.-w-32')
    }
    ClearCart() {
        cy.get("button[data-pop-open='removeFromCart']").click()
        cy.get('button.btn._prim._i.-fw.-fh').click()
    }

    Logout() {
        cy.get("div:nth-of-type(1)>label[for='dpdw-login']").click()
        cy.get("button[class*='btn'][type='submit']").click()
    }
    CompareItemAndTotal() {

        cy.get("div[class='prc']:first-of-type")
            .invoke('text')
            .then((itemPrice) => {
                const newEle = () => itemPrice.replace('EGP ', '').trim();
                cy.get("article[class='card']>div[class*='-i-ctr']>p[class^='-fs20']")
                    .invoke('text')
                    .then((totalPrice) => totalPrice.replace('EGP ', '').trim())
                    .should('eq', (Number(newEle()) * 2).toFixed(2));
            });
    }

    ItemPrice() {
        return cy.get("div[class='prc']:first-of-type")
            .invoke('text');
    }
    TotalPrice() {
        return cy.get("article[class='card']>div[class*='-i-ctr']>p[class^='-fs20']")
            .invoke('text')
            .then((totalPrice) => totalPrice.replace('EGP ', '').trim())

    }

}
export default ShoppingPage