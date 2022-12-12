package steps2;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages2.Accounts;
import pages2.Dashboard;
import pages2.LaunchBrowser;
import pages2.LogIn;

public class StepDefinition extends LaunchBrowser{
	LogIn logIn;
	Dashboard dashboard;
	Accounts accounts;
	@Before
	public void setup () {
		initDriver();
		logIn = PageFactory.initElements(driver, LogIn.class);
		dashboard = PageFactory.initElements(driver, Dashboard.class);
		accounts = PageFactory.initElements(driver, Accounts.class);
	}
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page()  {
		
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the(String userName)  {
	   
	    logIn.enterUserName(userName);
	}

	@When("^User enters \"([^\"]*)\"$")
	public void user_enters(String password)  {
		logIn.enterPassword(password);
	    
	}

	@When("^User clicks on login button$")
	public void user_clicks_on_login_button() {
	   logIn.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page()  {
		String expectedTitle = "Dashboard- iBilling";
		  String actualTitle = logIn.getPageTitle();
		  Assert.assertEquals(expectedTitle, actualTitle);
	   
	}

	@Then("^User clicks on Bank Cash$")
	public void user_clicks_on()  {
		dashboard.clickBankCash();
	}

	@Then("^User clicks on NewAccount$")
	public void user_clicks_on_NewAccount()  {
	    dashboard.clickNewAccount();
	}

	@Then("^User enters accountTitle as\"([^\"]*)\" in accounts page$")
	public void user_enters_accointTitle_as_AccountTitle_in_accounts_page(String accountTitle) {
	   accounts.enterAccountTitle(accountTitle);
	}

	@Then("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description)  {
		accounts.enterDrscription(description);
}

	@Then("^User enters balance on\"([^\"]*)\" in accounts page$")
	public void user_enters_balance_on_in_accounts_page(String initialBalance)  {
	    accounts.enterInitialBalance(initialBalance);
	}

	@Then("^User enters acctNumber\"([^\"]*)\" in accounts page$")
	public void user_enters_acctNumber_in_accounts_page(String accountNumber)  {
	    accounts.AccountNumber(accountNumber);
	}

	@Then("^User enters contact on\"([^\"]*)\" in accounts page$")
	public void user_enters_contact_on_in_accounts_page(String contactPerson)  {
	   accounts.ContactPerson(contactPerson);
	}

	@Then("^User enters phoneNumber on\"([^\"]*)\" in accounts page$")
	public void user_enters_phoneNumber_on_in_accounts_page(String phone)  {
	   accounts.Phone(phone);
	}

	@Then("^User enters url on\"([^\"]*)\" in accounts page$")
	public void user_enters_url_on_in_accounts_page(String internetBankingURL)  {
	    accounts.InternetBankingURL(internetBankingURL);
	}

	@Then("^User clicks on button submit$")
	public void user_clicks_on_button_submit() {
	   accounts.Submit();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully()  {
	    
	}
}

