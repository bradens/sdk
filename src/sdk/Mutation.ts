import { DeleteWebhooksInput } from "../resources/graphql";
import {
  CreateWebhooksDocument,
  CreateWebhooksInput,
  DeleteWebhooksDocument,
} from "./generated/graphql";
import { Codex } from "./index";

export class Mutation {
  constructor(private sdk: Codex) {}
  createWebhooks = async (vars: { input: CreateWebhooksInput }) =>
    this.sdk.mutation(CreateWebhooksDocument, vars);
  deleteWebhooks = async (vars: { input: DeleteWebhooksInput }) =>
    this.sdk.mutation(DeleteWebhooksDocument, vars);
}
