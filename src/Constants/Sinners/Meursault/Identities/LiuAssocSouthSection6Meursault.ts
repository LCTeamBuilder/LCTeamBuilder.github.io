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

const LiuAssocSouthSection6MeursaultDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/GuardUT4.png'
}

const LiuAssocSouthSection6MeursaultSkill1: Skill = {
    Name: "Assault",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/Assault.png'
}

const LiuAssocSouthSection6MeursaultSkill2: Skill = {
    Name: "Stalwart Stance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] If target has 6+ [Burn], inflict 3 [Burn] on 2 random enemies", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/StalwartStance.png'
}

const LiuAssocSouthSection6MeursaultSkill3: Skill = {
    Name: "Perfected Death Fist",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Burn] Count<br>"+
            "[On Hit] If target has 6+ [Burn], inflict 3 [Burn] on 2 random enemies", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/LiuAssociationSouthSection6/PerfectedDeathFist.png'
}

export const LiuAssocSouthSection6Meursault: Identity = {
    Id: 10502,
    Name: "Liu Assoc. South Section 6",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection6MeursaultSkill1, 
            LiuAssocSouthSection6MeursaultSkill2, 
            LiuAssocSouthSection6MeursaultSkill3, 
            LiuAssocSouthSection6MeursaultDefense],
    Passives: [
        new Passive("Great Mountain",
            PassiveTypeEnum.Combat,
            "When attacked, inflict 1 [Burn] on a random enemy.<br>"+
            "(Up to 4 times)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Friction Point",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Burn]",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/LiuAssociationSouthSection6/10502gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/LiuAssociationSouthSection6/10502gacksunginfo.png'
}