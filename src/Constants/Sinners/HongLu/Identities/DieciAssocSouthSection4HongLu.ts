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

const DieciAssocSouthSection4HongLuDefense: Skill = {
    Name: "Guiding Steps",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Randomly [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/GuidingStepsUT4.png"
}

const DieciAssocSouthSection4HongLuSkill1: Skill = {
    Name: "Expend Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Clash Power +([Insight] - 1)"),
        new SkillDescriptionPart("[Heads Hit] Inflict +1 [Sinking] Count<br>"+
            "[On Hit] Reuse Coin ([Insight] - 1) times", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/ExpendKnowledge.png"
}

const DieciAssocSouthSection4HongLuSkill2: Skill = {
    Name: "Unveil",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Randomly [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots<br>"+
            "[On Use] Coin Power +([Insight] - 1)"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Sinking]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/Unveil.png"
}

const DieciAssocSouthSection4HongLuSkill3: Skill = {
    Name: "Cyclical Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 2+ [Insight], gain Coin Power equal to [Insight]<br>"+
            "[On Use] Deal +3% more damage per [Sinking] on target (Max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count<br>"+
            "[After Attack] If target is Staggered or defeated, heal 10 SP", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/CyclicalKnowledge.png"
}

export const DieciAssocSouthSection4HongLu: Identity = {
    Id: 10608,
    Name: "Dieci Assoc. South Section 4",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.49,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4HongLuSkill1, 
            DieciAssocSouthSection4HongLuSkill2, 
            DieciAssocSouthSection4HongLuSkill3, 
            DieciAssocSouthSection4HongLuDefense],
    Passives: [
        new Passive("Peering Through a Key",
            PassiveTypeEnum.Combat,
            "When Discarding a Skill, gain 'Damage Up' equal to the Discarded Skill Rank. (Max 3 per turn)<br>"+
            "When other allies Discard a Skill, and if the ally's Discarded Skill rank is higher than this unit's [Insight] value, this unit gains +1 [Insight] .",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Enlightenment",
            PassiveTypeEnum.Support,
            "[After Attack] If the target is in a staggered or defeated state by an attack from 1 ally with the least SP, the ally heals 7 SP.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/DieciAssociationSouthSection4/10608gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/DieciAssociationSouthSection4/10608gacksunginfo.png"
}