import {
  CreateApiTokensDocument,
  CreateApiTokensMutationVariables,
  CreateWebhooksDocument,
  CreateWebhooksMutationVariables,
  DeleteApiTokenDocument,
  DeleteApiTokenMutationVariables,
  DeleteWebhooksDocument,
  DeleteWebhooksMutationVariables,
} from "./autogenerated/graphql";
import { Codex } from "./index";

export class Mutation {
  constructor(private sdk: Codex) {}
  createWebhooks = async (vars: CreateWebhooksMutationVariables) =>
    this.sdk.mutation(CreateWebhooksDocument, vars);
  deleteWebhooks = async (vars: DeleteWebhooksMutationVariables) =>
    this.sdk.mutation(DeleteWebhooksDocument, vars);
  createApiTokens = async (vars: CreateApiTokensMutationVariables) =>
    this.sdk.mutation(CreateApiTokensDocument, vars);
  deleteApiToken = async (vars: DeleteApiTokenMutationVariables) =>
    this.sdk.mutation(DeleteApiTokenDocument, vars);
}
