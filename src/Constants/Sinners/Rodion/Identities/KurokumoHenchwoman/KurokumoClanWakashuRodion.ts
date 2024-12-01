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
import { KurokumoClanWakashuRodionDefense } from "./KurokumoClanWakashuRodionDefense";
import { KurokumoClanWakashuRodionSkill1 } from "./KurokumoClanWakashuRodionSkill1";
import { KurokumoClanWakashuRodionSkill2 } from "./KurokumoClanWakashuRodionSkill2";
import { KurokumoClanWakashuRodionSkill3 } from "./KurokumoClanWakashuRodionSkill3";

export const KurokumoClanWakashuRodion: Identity = {
    Id: 10902,
    Name: "Kurokumo Clan Wakashu",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KurokumoClanWakashuRodionSkill1, 
            KurokumoClanWakashuRodionSkill2, 
            KurokumoClanWakashuRodionSkill3, 
            KurokumoClanWakashuRodionDefense],
    Passives: [
        new Passive("Dark Cloud Blade",
            PassiveTypeEnum.Combat,
            "At 5+ [Poise], counter skills use Skill 3.",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dark Cloud Sword Swordsmanship",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +10% Slash damage.",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/KurokumoHenchwoman/10902gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/KurokumoHenchwoman/10902gacksunginfo.png"
}