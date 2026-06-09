/**
 * ADL Service — REMOVED in v17.
 *
 * ExecuteAdl (tag 50/101) does not exist in the v17 wrapper program.
 * The on-chain instruction was removed as part of the v17 convergence:
 *   - encodeExecuteAdl() in @percolatorct/sdk 3.0.0 throws removedInstruction().
 *   - ACCOUNTS_EXECUTE_ADL is retained for reference only.
 *
 * ADL functionality (if re-introduced) must be re-implemented using the
 * v17 PermissionlessCrank(action=Liquidate) or a new on-chain instruction.
 *
 * This file is intentionally empty. Remove all imports of AdlService from
 * index.ts and other callers.
 */

// No exports. AdlService has been removed.
export {};
