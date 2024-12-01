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
import { LosMariachisJefeSinclairDefense } from "./LosMariachisJefeSinclairDefense";
import { LosMariachisJefeSinclairSkill1 } from "./LosMariachisJefeSinclairSkill1";
import { LosMariachisJefeSinclairSkill2 } from "./LosMariachisJefeSinclairSkill2";
import { LosMariachisJefeSinclairSkill3 } from "./LosMariachisJefeSinclairSkill3";

export const LosMariachisJefeSinclair: Identity = {
    Id: 11004,
    Name: "Los Mariachis Jefe",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 95,
    HealthPerLevel: 3.26,
    SpeedMin: 2,
    SpeedMax: 3,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LosMariachisJefeSinclairSkill1, 
            LosMariachisJefeSinclairSkill2, 
            LosMariachisJefeSinclairSkill3, 
            LosMariachisJefeSinclairDefense],
    Passives: [
        new Passive("Júbilo Hedonista",
            PassiveTypeEnum.Combat,
            "After a successful evade, lower Stagger Threshold by the evade skill's Power at a (5x Gloom Reson.)% chance.",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Jugar con Enemigos",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +10% damage to enemies with lower SP.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/JefeDeLosMariachis/11004gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/JefeDeLosMariachis/11004gacksunginfo.png"
}