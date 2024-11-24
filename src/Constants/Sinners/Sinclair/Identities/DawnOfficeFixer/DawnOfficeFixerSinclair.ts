import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { DawnOfficeFixerSinclairSkill1 } from "./DawnOfficeFixerSinclairSkill1";
import { DawnOfficeFixerSinclairSkill2 } from "./DawnOfficeFixerSinclairSkill2";
import { DawnOfficeFixerSinclairSkill3 } from "./DawnOfficeFixerSinclairSkill3";
import { DawnOfficeFixerSinclairSkill4 } from "./DawnOfficeFixerSinclairSkill4";
import { DawnOfficeFixerSinclairDefense } from "./DawnOfficeFixerSinclairDefense";

export class DawnOfficeFixerSinclair implements Identity{
    readonly Id: number = 11009;
    readonly Name: string = "Dawn Office Fixer";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new DawnOfficeFixerSinclairSkill1,
                                new DawnOfficeFixerSinclairSkill2,
                                new DawnOfficeFixerSinclairSkill3,
                                new DawnOfficeFixerSinclairSkill4,
                                new DawnOfficeFixerSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Unstable Shell of Ego",
            PassiveTypeEnum.Combat,
            "Turn Start: At 40+ SP, consume 20 SP to enter the Volatile E.G.O::Waxen Pinion state. (this 'Turn Start' effect does not activate repeatedly)<br>"+
            "If 2+ allies are defeated in a single turn, and if this unit's SP isn't at -45 at Turn End, reset SP to 20; then, enter the Volatile E.G.O::Waxen Pinion state.<br><br>"+

            "If this unit gets Staggered due to damage or raised Stagger Threshold when entering the Volatile E.G.O state, recover from Stagger. If the Stagger is something that cannot be naturally recovered from, this unit does not enter the Volatile E.G.O state.<br><br>"+

            "Gain [Volatile Passion] while in the Volatile E.G.O state.<br><br>"+

            "Turn Start: At 0 or less SP, exit the Volatile E.G.O::Waxen Pinion state."),

        new Passive("Stigma Workshop Weaponry/Passion",
            PassiveTypeEnum.Combat,
            "This unit inflicts +1 more [Burn] Potency and Count with its Skills (activates 6 times per turn)<br>"+
            "When in a Volatile E.G.O state, and at 0+ SP, gain + Coin Power +(SP/20). At 45 SP, gain +3 Coin Power instead.",
            [{sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Flaming Brand",
            PassiveTypeEnum.Support,
            "When the first Sinner to be Deployed Heads Hits, inflict +1 [Burn] Count (4 times per turn)",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/DawnOfficeFixer/11009gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/DawnOfficeFixer/11009gacksunginfo.png";
}