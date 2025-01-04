import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const LosMariachisJefeSinclairDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Gain +1 [Poise] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/JefeDeLosMariachis/EvadeUT4.png"
}

const LosMariachisJefeSinclairSkill1: Skill = {
    Name: "Baile y Rola",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 4+ [Sinking], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/JefeDeLosMariachis/BaileYRola.png"
}

const LosMariachisJefeSinclairSkill2: Skill = {
    Name: "Danza de Pasión",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Sinking], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Hit] Inflict +1 [Sinking] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/JefeDeLosMariachis/DanzaDePasion.png"
}

const LosMariachisJefeSinclairSkill3: Skill = {
    Name: "Pañata Party",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +11,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("If target's SP is below 0, boost crit chance proportional to target's SP<br>"+
            "If user has 5+ [Poise] Count, +30% Critical Damage"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 50% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/JefeDeLosMariachis/PanataParty.png"
}

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