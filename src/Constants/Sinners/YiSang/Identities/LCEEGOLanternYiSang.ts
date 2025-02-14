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

const LCEEGOLanternYiSangDefense: Skill = {
    Name: "Yet, the degree to which that attunement and synchronization are achieved may resultantly allow the user to be devoured",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain 3 [Fairy Lure] (once per turn)<br>"+
            "[On Use] Gain +8 [Aggro] next turn<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Count with its effects; instead, gain Base Power +3"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LCEEGOLantern/YetTheDegreeUT4.png'
}

const LCEEGOLanternYiSangSkill1: Skill = {
    Name: "Though it must be prefaced that E.G.O gears are standardized equipment,",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] On Clash Lose, gain Final Power equal to the number of Skills targeting this unit (max 3)<br>"+
            "[On Use] Gain +3 [Aggro] next turn<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] with its effects<br>"+
            "[Clash Lose] [Rupture] Potency inflicted by this Skill +2"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LCEEGOLantern/ThoughItMust.png'
}

const LCEEGOLanternYiSangSkill2: Skill = {
    Name: "when juxtaposed with E.G.O gear from L Corp., depending on the degree of attunement to the Abnormality,",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] On Clash Lose, gain (# of Skills targeting this unit x 2) Final Power (max 6)<br>"+
            "[On Use] Gain +4 [Aggro] next turn<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] Count with its effects<br>"+
            "[Clash Lose] [Rupture] Count inflicted by this Skill +2"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LCEEGOLantern/WhenJuxtaposedWith.png'
}

const LCEEGOLanternYiSangSkill3: Skill = {
    Name: "the idiosyncrasies of the source may be utilized with greater flexibility",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 16,
    Coins: 3,
    CoinValue: -5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +0.8% more damage for every 1% missing HP on self<br>"+
            "[Combat Start] Base Power +1 for every Skill that targets this unit (max 3)<br>"+
            "[On Use] Gain 3 [Fairy Lure] (once per turn)<br>"+
            "[On Use] Gain +8 [Aggro] next turn<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] or [Rupture] Count with its effects; instead, gain Base Power +1<br>"+
            "[After Attack] Heal 30 SP"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/LCEEGOLantern/TheIdiosyncrasiesOf.png'
}

export const LCEEGOLanternYiSang: Identity = {
    Id: 10111,
    Name: "LCE E.G.O::Lantern",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +0,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LCEEGOLanternYiSangSkill1, 
            LCEEGOLanternYiSangSkill2, 
            LCEEGOLanternYiSangSkill3, 
            LCEEGOLanternYiSangDefense],
    Passives: [
        new Passive("This is reflected in their appearance, more closely resembling the source Abnormality than E.G.O of the former L Corp. do",
            PassiveTypeEnum.Combat,
            "On death, inflict 5 [Rupture] and +3 [Rupture] Count against the target that attacked this unit last; then, gain 2 E.G.O resources for 4 least-owned E.G.O resources.<br>"+
            "- If no one attacked this unit, or if an ally killed this unit, inflict 5 [Rupture] and +3 [Rupture] Count against the enemy with the least [Rupture] Count<br>"+
            "- If this unit is in a [Fairy Lure] state, inflict double the [Rupture] potency with this effect",
            [{ sin: SinEnum.Gluttony , amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("E.G.O disintegration is not unlike decomposition of compost",
            PassiveTypeEnum.Support,
            "When 1 ally with the least HP is killed, gain 2 E.G.O resources for the 2 E.G.O least-owned E.G.O resources",
            [{ sin: SinEnum.Gluttony, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/YiSang/Identities/LCEEGOLantern/10111gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/LCEEGOLantern/10111gacksunginfo.png'
}