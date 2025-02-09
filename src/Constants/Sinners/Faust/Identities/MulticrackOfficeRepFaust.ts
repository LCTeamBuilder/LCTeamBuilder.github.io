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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const MulticrackOfficeRepFaustDefense: Skill = {
    Name: "Charge",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Charge] Count (2 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/ChargeUT4.png'
}

const MulticrackOfficeRepFaustSkill1: Skill = {
    Name: "40Y-3 Activation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Consume 5 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/40Y3Activation.png'
}

const MulticrackOfficeRepFaustSkill2: Skill = {
    Name: "Charge Countercurrent",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 5-9 [Charge] Count, consume 2(10 - current [Charge] Count)% HP to raise [Charge] Count to 10<br>"+
            "[On Use] Consume 10 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("At 3+ Reson. including this Skill, consume all [Charge] Count on self and deal +([Charge] + 4)% more damage for every [Charge] Count consumed by this Skill (max 180%)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/ChargeCountercurrent.png'
}

const MulticrackOfficeRepFaustSkill3: Skill = {
    Name: "40Y-3 Charge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every [Charge] (max 4)"),
            new SkillDescriptionPart("[On Hit] Gain +([Charge] + 5) [Charge] Count (max 8)", 1),
            new SkillDescriptionPart("[On Hit] Gain +([Charge] + 5) [Charge] Count (max 8)", 2),
            new SkillDescriptionPart("At 3+ [Charge], deal +8% more damage for every [Charge] (max 40%)<br>"+
                "[On Hit] Inflict 1 [Envy Fragility] next turn<br>"+
                "- At 2+ [Charge], inflict 1 additional [Envy Fragility]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/40Y3Charge.png'
}

export const MulticrackOfficeRepFaust: Identity = {
    Id: 10210,
    Name: "MultiCrack Office Rep",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MulticrackOfficeRepFaustSkill1, 
            MulticrackOfficeRepFaustSkill2, 
            MulticrackOfficeRepFaustSkill3, 
            MulticrackOfficeRepFaustDefense],
    Passives: [
        new Passive("Electrocurrent Dismantling",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count in this Encounter<br>"+
            "At 2+ [Charge] , deal +([Charge] x 3)% more damage (max 15%)<br>"+
            "- If the target is at less than 50% HP, deal +([Charge] x 5)% additionally increased damage (max 25%)<br><br>"+
            
            "[On Kill] This unit and 2 allies with the least [Charge] Count gains [Charge] Count equal to ([Charge] + 2) (max 5, prioritizes allies that consume or gain [Charge])",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Auxiliary Dismantling Current",
            PassiveTypeEnum.Support,
            "When 1 ally with the least [Charge] Count kills an enemy, the ally gains +3 [Charge] Count (once per turn, prioritizes allies that consume or gain [Charge])",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Faust/Identities/MultiCrackOfficeRep/10210gacksung.png',
    PortraitImageDir: './assets/Sinners/Faust/Identities/MultiCrackOfficeRep/10210gacksunginfo.png'
}