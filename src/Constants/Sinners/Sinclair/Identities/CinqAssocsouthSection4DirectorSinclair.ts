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

const CinqAssocsouthSection4DirectorSinclairDefense: Skill = {
    Name: "Défensive",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/CinqAssocSouthSection4Director/DefensiveUT4.png"
}

const CinqAssocsouthSection4DirectorSinclairSkill1: Skill = {
    Name: "Remise",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 2 or more, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Haste] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Haste] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/CinqAssocSouthSection4Director/Remise.png"
}

const CinqAssocsouthSection4DirectorSinclairSkill2: Skill = {
    Name: "Engagement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, Coin Power +1 for every 2 Speed difference (Max 2)<br>"+
            "[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/CinqAssocSouthSection4Director/Engagement.png"
}

const CinqAssocsouthSection4DirectorSinclairSkill3: Skill = {
    Name: "Contre Attaque",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, Coin Power +1 for every 2 Speed difference (Max 3)<br>"+
            "[Clash Win] Consume 10 [Poise] Count. Gain [Poise] equal to [Poise] Count consumed. Against targets with [Declared Duel] - Sinclair, gain [Poise] equal to ([Poise] Count consumed x 2) instead<br>"+
            "[Clash Win] If this unit conducted a [Single Combat] with the target Slot's Attack Skill, inflict 1 [Fragile] On Hit (Twice per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Sinclair", 1),
        new SkillDescriptionPart("[On Crit] +50% Damage on Critical Hit", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/CinqAssocSouthSection4Director/ContreAttaque.png"
}

export const CinqAssocsouthSection4DirectorSinclair: Identity = {
    Id: 11008,
    Name: "Cinq Assoc.South Section 4 Director",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.71,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocsouthSection4DirectorSinclairSkill1, 
            CinqAssocsouthSection4DirectorSinclairSkill2, 
            CinqAssocsouthSection4DirectorSinclairSkill3, 
            CinqAssocsouthSection4DirectorSinclairDefense],
    Passives: [
        new Passive("Slumbering Bloodlust",
            PassiveTypeEnum.Combat,
            "Turn End: Gain +2 Max Speed next turn for every 5 [Poise] Count (Max 6)<br>"+
            "Combat Start: If Speed of all allies is higher than Speed of all enemies, gain 1 [Pierce DMG Up]",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Too Slow",
            PassiveTypeEnum.Support,
            "The fastest ally, On Evade, gains 1 [Haste] next turn (Max 5)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/CinqAssociationSouthSection4Director/11008gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/CinqAssociationSouthSection4Director/11008gacksunginfo.png"
}