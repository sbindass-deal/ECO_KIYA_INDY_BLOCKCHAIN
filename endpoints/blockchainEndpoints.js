// Create Connection
const createConnRequest = `/connections/create-invitation`;
const receiveConnRequest = `/connections/receive-invitation`;
const fetchConnectionMetadata = `/connections/fetchMetadata`;
const acceptConnRequest = `/connections/accept-invitation`;
// Schema Creation
const createSchema = `/schemas`;
const getSchema = `/schemas`;

// Schema Definition
const createSchemaDef = `/credential-definitions`;

// Issue-Credential and Credential Exchange
const sendProposalHolder = `/issue-credential-2.0/send-proposal`;
const sendOfferIssuer = `/issue-credential-2.0/send-offer`;
const sendRequestHolder = `/issue-credential-2.0/send-request`;
const issueCreds = `/issue-credential-2.0/records`;
const storeCredentials = `/issue-credential-2.0/store-credentials`;

// Credential Revocation APIs

// Credential Proof Presentation

// wallet APIs

// Ledger APIs
module.exports = {createConnRequest, createSchemaDef, getSchema, receiveConnRequest, acceptConnRequest, fetchConnectionMetadata, createSchema, sendProposalHolder, sendOfferIssuer, sendRequestHolder, issueCreds, storeCredentials}