import LoginPage from "./../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("User opens the GoIT page", () => {
  beforeEach("go to page", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("succesfully login user1 to the GoIT page", () => {
    cy.fixture("user1.json").then((user) => {
      const useremail = user.email;
      const password = user.password;

      loginPage.loginUser(useremail, password);
    });

    after(() => {
      homepage.menuComponent.logout();
    });
  });
});
