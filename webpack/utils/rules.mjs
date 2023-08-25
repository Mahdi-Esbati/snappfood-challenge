/**
 *  @type {(ruleList: Object[]) => Object[]}
 *  flatten the rules array to make the rule creation easier,
 *  */
export const calculateRules = (ruleList) => {
    return ruleList.flatMap((rule) => rule)
}
