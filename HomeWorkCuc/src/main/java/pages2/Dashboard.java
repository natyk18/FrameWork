package pages2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Dashboard {
	WebDriver driver;
	public Dashboard (WebDriver driver) {
		this.driver = driver;
		}
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement BankCash;
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement NewAccount;
	
	
	 public void clickBankCash(){
		 BankCash.click();
		   try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		  }
	 
	 public void clickNewAccount() {
		  NewAccount.click();
	 }
}
