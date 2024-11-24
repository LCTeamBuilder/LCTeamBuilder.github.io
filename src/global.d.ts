import { OverlayEnum, SinEnum } from './Enums/Index';
import { Sinner } from './Models/Index';

declare global {
    var TeamData: Array<Sinner>;
    var TeamSins: Record<SinEnum, { Generated: number, Used: number }>;
    var DeployedTeamSins: Record<SinEnum, { Generated: number, Used: number }>;
    var TeamOverlay: OverlayEnum;
    var TeamLink: string = window.location.href;
    var DeployedAmount: number = 0;
}