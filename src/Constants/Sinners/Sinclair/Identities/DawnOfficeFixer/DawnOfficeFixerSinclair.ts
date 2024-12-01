import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { DawnOfficeFixerSinclairDefense } from "./DawnOfficeFixerSinclairDefense";
import { DawnOfficeFixerSinclairSkill1 } from "./DawnOfficeFixerSinclairSkill1";
import { DawnOfficeFixerSinclairSkill2 } from "./DawnOfficeFixerSinclairSkill2";
import { DawnOfficeFixerSinclairSkill3 } from "./DawnOfficeFixerSinclairSkill3";
import { DawnOfficeFixerSinclairSkill4 } from "./DawnOfficeFixerSinclairSkill4";

export const DawnOfficeFixerSinclair: Identity = {
    Id: 11009,
    Name: "Dawn Office Fixer",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DawnOfficeFixerSinclairSkill1,
            DawnOfficeFixerSinclairSkill2,
            DawnOfficeFixerSinclairSkill3,
            DawnOfficeFixerSinclairSkill4,
            DawnOfficeFixerSinclairDefense],
    Passives: [
        new Passive("Unstable Shell of Ego",
            PassiveTypeEnum.Combat,
            "Turn Start: At 40+ SP, consume 20 SP to enter the Volatile E.G.O::Waxen Pinion state. (this 'Turn Start' effect does not activate repeatedly)<br>"+
            "If 2+ allies are defeated in a single turn, and if this unit's SP isn't at -45 at Turn End, reset SP to 20, then, enter the Volatile E.G.O::Waxen Pinion state.<br><br>"+

            "If this unit gets Staggered due to damage or raised Stagger Threshold when entering the Volatile E.G.O state, recover from Stagger. If the Stagger is something that cannot be naturally recovered from, this unit does not enter the Volatile E.G.O state.<br><br>"+

            "Gain [Volatile Passion] while in the Volatile E.G.O state.<br><br>"+

            "Turn Start: At 0 or less SP, exit the Volatile E.G.O::Waxen Pinion state."),

        new Passive("Stigma Workshop Weaponry/Passion",
            PassiveTypeEnum.Combat,
            "This unit inflicts +1 more [Burn] Potency and Count with its Skills (activates 6 times per turn)<br>"+
            "When in a Volatile E.G.O state, and at 0+ SP, gain + Coin Power +(SP/20). At 45 SP, gain +3 Coin Power instead.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Flaming Brand",
            PassiveTypeEnum.Support,
            "When the first Sinner to be Deployed Heads Hits, inflict +1 [Burn] Count (4 times per turn)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/DawnOfficeFixer/11009gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/DawnOfficeFixer/11009gacksunginfo.png"
}