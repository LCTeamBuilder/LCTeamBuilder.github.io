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
import { ZweiAssocSouthSection5RodionDefense } from "./ZweiAssocSouthSection5RodionDefense";
import { ZweiAssocSouthSection5RodionSkill1 } from "./ZweiAssocSouthSection5RodionSkill1";
import { ZweiAssocSouthSection5RodionSkill2 } from "./ZweiAssocSouthSection5RodionSkill2";
import { ZweiAssocSouthSection5RodionSkill3 } from "./ZweiAssocSouthSection5RodionSkill3";

export const ZweiAssocSouthSection5Rodion: Identity = {
    Id: 10906,
    Name: "Zwei Assoc. South Section 5",
    Sinner: SinnerEnum.Rodion,
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
    Skills: [ZweiAssocSouthSection5RodionSkill1, 
            ZweiAssocSouthSection5RodionSkill2, 
            ZweiAssocSouthSection5RodionSkill3, 
            ZweiAssocSouthSection5RodionDefense],
    Passives: [
        new Passive("Defense Breathing",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain 2 Shield per 1 [Poise] Count. (Max 20)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Designated Protection",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, 1 ally with the lowest HP percentage gains 1 Shield per 1 [Poise] Count next turn. (Max 10)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/ZweiAssociationSouthSection5/10906gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/ZweiAssociationSouthSection5/10906gacksunginfo.png"
}