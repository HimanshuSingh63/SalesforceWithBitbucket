@isTest
public class firstApexClassTest{
    @isTest static void getRecordMethodTest() {
        // Create test data
        Account testAccount = new Account(Name = 'Test Account');
        insert testAccount;

        // Test getRecordmethod
        Test.startTest();
        List<Account> accounts = firstApexClass.getRecordMethod();
        Test.stopTest();

        // Verify
        System.assertEquals(1, accounts.size(), 'Expected 1 account');
        System.assertEquals(testAccount.Id, accounts[0].Id, 'Account ID mismatch');
        System.assertEquals(testAccount.Name, accounts[0].Name, 'Account Name mismatch');
    }
}