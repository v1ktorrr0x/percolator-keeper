/**
 * Shared types for keeper services.
 *
 * Extracted from crank.ts so liquidation.ts can import MarketCrankState
 * without creating a circular dependency.
 *
 * v17: ADL scaffolding (PrepareAdlArgs / PrepareAdlResult) removed —
 * ExecuteAdl (tag 101/50) does not exist in the v17 wrapper.
 */
import type { DiscoveredMarket } from "@percolatorct/sdk";

export interface MarketCrankState {
  market: DiscoveredMarket;
  lastCrankTime: number;
  successCount: number;
  failureCount: number;
  consecutiveFailures: number;
  isActive: boolean;
  missingDiscoveryCount: number;
  permanentlySkipped?: boolean;
  permanentlySkippedAt?: number;
  skipCount?: number;
  mainnetCA?: string;
  foreignOracleSkipped?: boolean;
  /**
   * v17: The keeper's own portfolio account on this market.
   * Used as account[2] in PermissionlessCrank (FeeSweep) and appended as the
   * last oracle-tail account in PermissionlessCrank (Liquidate) to receive
   * the liquidation-cranker fee share. Null until provisioned.
   */
  keeperPortfolio?: import("@solana/web3.js").PublicKey | null;
}
