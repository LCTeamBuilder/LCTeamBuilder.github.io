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
import { ZweiAssocSouthSection6SinclairDefense } from "./ZweiAssocSouthSection6SinclairDefense";
import { ZweiAssocSouthSection6SinclairSkill1 } from "./ZweiAssocSouthSection6SinclairSkill1";
import { ZweiAssocSouthSection6SinclairSkill2 } from "./ZweiAssocSouthSection6SinclairSkill2";
import { ZweiAssocSouthSection6SinclairSkill3 } from "./ZweiAssocSouthSection6SinclairSkill3";

export const ZweiAssocSouthSection6Sinclair: Identity = {
    Id: 11003,
    Name: "Zwei Assoc. South Section 6",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 88,
    HealthPerLevel: 3.05,
    SpeedMin: 2,
    SpeedMax: 4,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ZweiAssocSouthSection6SinclairSkill1, 
            ZweiAssocSouthSection6SinclairSkill2, 
            ZweiAssocSouthSection6SinclairSkill3, 
            ZweiAssocSouthSection6SinclairDefense],
    Passives: [
        new Passive("Your Shield",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, apply 2 [Defense Power Up] and 1 [Protection] to allies adjacent to this unit on the Dashboard.",
            [{ sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Stubbornness",
            PassiveTypeEnum.Support,
            "1 ally with the least HP takes -10% damage.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/ZweiAssociationSouthSection6/11003gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/ZweiAssociationSouthSection6/11003gacksunginfo.png"
}