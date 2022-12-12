package testng;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


public class Login {
	WebDriver driver;

	By USERNAME = By.xpath("//*[@id=\"username\"]");
	By PASSWORD = By.xpath("//*[@id=\"password\"]");
	By LOGIN = By.xpath("/html/body/div/div/div/form/div[3]/button");

	String userName = "demo@techfios.com";
	String passWord = "abc123";

	
	@BeforeMethod
	public void initDriver() {

		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.get("http://techfios.com/billing/?ng=admin/");
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
	}

	@Test
	public void loginTest() {
		driver.findElement(USERNAME).sendKeys(userName);
		driver.findElement(PASSWORD).sendKeys(passWord);
		driver.findElement(LOGIN).click();
	}

	
	
	@AfterMethod 
	 public void tearDown() { 
		 driver.close(); }
	 
}