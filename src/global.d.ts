import { OverlayEnum } from './Enums/OverlayEnum';
import { Sinner } from './Models/Sinner';

declare global {
    var TeamData: Array<Sinner>;
    var TeamOverlay: OverlayEnum;
    var TeamLink: string = window.location.href
    ;
}