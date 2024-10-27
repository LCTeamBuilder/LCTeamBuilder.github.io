import { OverlayEnum } from './Enums/OverlayEnum';
import { SinEnum } from './Enums/SinEnum';
import { Sinner } from './Models/Sinner';

declare global {
    var TeamData: Array<Sinner>;
    var TeamSins: Record<SinEnum, {Generated: number, Used: number}>;
    var TeamOverlay: OverlayEnum;
    var TeamLink: string = window.location.href;
}