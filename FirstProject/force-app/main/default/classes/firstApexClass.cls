// Declares a public Apex class with sharing rules enforced
public with sharing class firstApexClass {

    // The @AuraEnabled annotation makes the method accessible from Lightning component
    // The cacheable=true parameter enables client-side caching of this method's return value
    @AuraEnabled(cacheable=true)
    public static List<Account> getRecordMethod() {
        
            // Attempts to return a list of all Account records with their Id and Name fields
            return [SELECT Id, Name FROM Account LIMIT 1];
        
    }
}