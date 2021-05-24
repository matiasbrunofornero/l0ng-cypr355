import { expect } from "chai";
import { apiUrl } from '../../fixtures/api.json';

let response;
let headers;

Given(/^a user who has a valid access token$/, () => {
    headers = {};
});

When(/^user calls the Employees endpoint by GET method$/, () => {
    cy.request('GET', apiUrl + '/employees').then((get) => {
        response = get;
    })
});

Then(/^code response should be 200$/, () => {
    expect(response).to.have.property('status', 200);
});

Then(/^body response should not be null$/, () => {
    expect(response.body).to.not.be.null;
});

When(/^user creates a new employee with the name "(.*)" using POST method$/, (name) => {
    const item = { "name": name };
    cy.request('POST', apiUrl + '/create', item).then((post) => {
        response = post.body;
        cy.log(JSON.stringify(post.body));
    });
});

Then(/^body response status should be success$/, () => {
    expect(response.status).to.contain("success");
});

Then(/^body response should includes the name "(.*)"$/, (name) => {
    expect(response.data.name).to.contain(name);
});

When(/^user updates a employee with ID "(.*)" name to "(.*)"$/, (ID, name) => {
    const item = { "name": name };
    cy.request(apiUrl + 'GET', '/employee/' + ID).then((get) => {
        cy.log(JSON.stringify(get.body.data));
    })

    cy.request(apiUrl + 'PUT', '/update/' + ID, item).then((put) => {
        cy.log(JSON.stringify(put.body));
        response = put.body;
    });
});