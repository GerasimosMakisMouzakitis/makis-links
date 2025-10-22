# 🚀 Quick Reference: Implementation Template Usage

A one-page guide for using the implementation plan template system.

---

## 📋 Quick Start (3 Steps)

### 1️⃣ Copy Template
```bash
cp docs/dev/plans/TEMPLATE-IMPLEMENTATION-PLAN.md \
   docs/dev/plans/PLAN-00X-YOUR-FEATURE.md
```

### 2️⃣ Fill in Chunks (for large plans)

**Efficient Workflow for Complex Plans:**

```bash
# Strategy A: Sequential Phases
# 1. Header + Metrics (15 min)
# 2. Phases 1-2 (30 min) 
# 3. Phases 3-4 (30 min)
# 4. Phases 5-6 (20 min)
# 5. Troubleshooting (15 min)
# 6. Checklist (10 min)
# Total: ~2 hours for comprehensive plan

# Strategy B: Code-First Approach
# 1. Write all code templates first (40 min)
# 2. Copy template and fill header (10 min)
# 3. Insert code into Phase 2 (5 min)
# 4. Fill other sections referencing code (30 min)
# 5. Add testing/troubleshooting (20 min)
# 6. Review and commit (15 min)
# Total: ~2 hours, complete code included
```

**Benefits of Chunking:**
- ✅ Prevents token limit issues
- ✅ Better focus on each section
- ✅ Easier to review incrementally
- ✅ Complete code templates included
- ✅ Faster implementation later

### 3️⃣ Execute Phases
- Phase 1: Preparation (⚠️ **BACKUP FILES FIRST** with .backup suffix, create dirs)
- Phase 2: Implementation (write code)
- Phase 3: Integration (connect components)
- Phase 4: Testing (visual, console, network)
- Phase 5: Documentation (version.json, CHANGELOG, **meta.module.json**)
- Phase 6: Git (commit & push, **clean up: remove originals, keep .backup**)

---

## ⚠️ CRITICAL: Backup Strategy

**ALWAYS create backups BEFORE modifying files:**

```bash
# Step 1: Create backups with .backup suffix
cp file-to-modify.ext file-to-modify.ext.backup

# Step 2: Verify backup created
ls -la *.backup

# Step 3: Implement changes
# ... make modifications ...

# Step 4: Test implementation
# ... run tests ...

# Step 5: After success, remove original (keep .backup)
rm file-to-modify.ext
# Keep: file-to-modify.ext.backup ✅

# Step 6: Commit cleanup
git add -u file-to-modify.ext
git add file-to-modify.ext.backup
git commit -m "chore: Remove unused original, keep .backup"
```

**Why .backup suffix?**
- ✅ Self-documenting: Clear it's a backup
- ✅ Easy rollback: Just rename .backup → original
- ✅ No confusion: Original vs backup is obvious

---

## 🎯 Template Sections Checklist

- [ ] Header (task, priority, effort, impact)
- [ ] Objective (what problem does this solve?)
- [ ] Success Criteria (measurable outcomes)
- [ ] Before/After Metrics (baseline vs target)
- [ ] 6 Phases with step-by-step instructions
- [ ] Complete code templates (copy-paste ready)
- [ ] Testing checklists (visual, console, network)
- [ ] Troubleshooting (common issues & solutions)
- [ ] Rollback plan (if something goes wrong)
- [ ] Time estimates (per phase)

---

## ⏱️ Typical Time Breakdown

| Phase | Duration | Activities |
|-------|----------|------------|
| Phase 1: Preparation | 15-30 min | **Backup files (.backup suffix)**, create directories |
| Phase 2: Implementation | 30-60 min | Write code, create files |
| Phase 3: Integration | 15-30 min | Connect components |
| Phase 4: Testing | 30-45 min | Visual, console, network tests |
| Phase 5: Documentation | 15-20 min | Update version files |
| Phase 6: Git | 10-15 min | Commit, push, **cleanup (rm originals, keep .backup)** |
| **Total** | **2-3 hours** | **Complete implementation** |

---

## 📊 Status Icons

| Icon | Status | Meaning |
|------|--------|---------|
| 🟡 | Ready to Start | Plan complete, not started |
| 🔵 | In Progress | Currently implementing |
| ✅ | Completed | Successfully done |
| 🔴 | Blocked | Waiting on dependencies |
| ⚫ | Cancelled | No longer needed |

---

## 🎨 Priority Levels

| Icon | Priority | When to Use |
|------|----------|-------------|
| 🔴 | HIGH | Core features, blocking issues |
| 🟡 | MEDIUM | Important but not urgent |
| 🟢 | LOW | Nice to have, future work |

---

## 📝 Naming Convention

```
PLAN-[NUMBER]-[FEATURE-NAME].md
```

**Examples:**
- ✅ `PLAN-001-EXTRACT-JAVASCRIPT.md`
- ✅ `PLAN-002-DATA-DRIVEN-LINKS.md`
- ✅ `PLAN-003-CSS-MODULES.md`
- ❌ `plan-1-feature.md` (wrong case)
- ❌ `PLAN-1-FEATURE.md` (need 3 digits)

---

## 🧪 Testing Phases

### Visual Tests
- [ ] Page loads without errors
- [ ] All UI elements appear correctly
- [ ] Styling is correct
- [ ] Responsive design works

### Console Tests (F12)
- [ ] No red errors
- [ ] Expected logs appear
- [ ] No 404 errors
- [ ] No CORS errors

### Network Tests (F12)
- [ ] All files load (200 status)
- [ ] No failed requests
- [ ] Proper caching
- [ ] Reasonable file sizes

### Functional Tests
- [ ] Feature works as expected
- [ ] Edge cases handled
- [ ] No regressions
- [ ] Performance acceptable

---

## 📚 Documentation Updates (Phase 5)

Every implementation must update these files **in order**:

1. **version.json** (Step 5.1)
   - Increment version number (0.0.X → 0.0.Y)
   - Update lastUpdated timestamp
   - Add/update module entries

2. **CHANGELOG.md** (Step 5.2)
   - Add new version entry at top
   - List changes (Added, Changed, Improved, Fixed)
   - Include author name

3. **meta.module.json** (Step 5.3) ⚠️ **MANDATORY**
   - Add entries for NEW modules created
   - Remove entries for REPLACED modules (if no longer used)
   - Update dependencies between modules
   - Update lastUpdated timestamps
   - Validate JSON syntax: `python3 -m json.tool meta.module.json`

4. **README.md** (Step 5.4) (if needed)
   - Update features list
   - Update file structure
   - Update usage instructions

**Why meta.module.json is critical:**
- Documents all modules in the system
- Shows dependencies between modules
- Tracks version history of each module
- Required for understanding project architecture

---

## 🔄 Git Workflow

```bash
# 1. Review changes
git status
git diff

# 2. Stage files
git add src/new/file.js
git add modified/file.js
git add version.json CHANGELOG.md meta.module.json

# 3. Commit with message
git commit -m "feat: Brief description (v0.0.X)

- Detailed change 1
- Detailed change 2
- Updated documentation

Modularity Score: 7.5 → 8.0/10 ⬆️

Benefits:
✅ Benefit 1
✅ Benefit 2"

# 4. Push to GitHub
git push origin main

# 5. Verify
git log --oneline -1
```

---

## 📝 Efficient Plan Creation (Large Plans)

### When to Use Chunking Strategy

**Use chunking for plans that include:**
- 1000+ lines of content
- 200+ lines of code templates
- 5+ files being created/modified
- Complex testing procedures
- Extensive troubleshooting sections

### Chunking Workflow

**Timeline for Complex Plan (~2 hours):**

```
Chunk 1 (0:00-0:15) → Header + Metrics
├─ Task description, priority, effort, impact
├─ Objective and benefits
├─ Success criteria (15-20 items)
└─ Before/After metrics

Chunk 2 (0:15-0:45) → Phases 1-2
├─ Phase 1: Preparation steps
│   ├─ Backup file list
│   ├─ Directory creation
│   └─ Prerequisites check
└─ Phase 2: Implementation
    ├─ Complete code for File 1
    ├─ Complete code for File 2
    ├─ Complete code for File 3
    └─ All code copy-paste ready

Chunk 3 (0:45-1:15) → Phases 3-4
├─ Phase 3: Integration steps
│   ├─ How components connect
│   ├─ Configuration updates
│   └─ File structure verification
└─ Phase 4: Testing procedures
    ├─ Visual testing checklist
    ├─ Console testing
    ├─ Network testing
    ├─ Performance testing
    └─ Accessibility testing

Chunk 4 (1:15-1:35) → Phases 5-6
├─ Phase 5: Documentation
│   ├─ version.json (complete JSON)
│   ├─ CHANGELOG.md (complete entry)
│   ├─ meta.module.json (all modules)
│   └─ README.md updates
└─ Phase 6: Git workflow
    ├─ File staging commands
    ├─ Commit message template
    ├─ Push verification
    └─ Cleanup steps

Chunk 5 (1:35-1:55) → Troubleshooting + Rollback
├─ Troubleshooting (5-7 common issues)
│   ├─ Issue description
│   ├─ Diagnosis commands
│   └─ Solutions (3-4 per issue)
└─ Rollback Plan
    ├─ Quick rollback (restore backups)
    ├─ Full Git revert
    └─ Partial rollback options

Chunk 6 (1:55-2:05) → Checklist + Review
├─ Phase-by-phase completion items
├─ Success metrics validation
├─ Final verification steps
└─ Review entire plan for completeness

Commit (2:05-2:10) → Git commit plan
└─ git add, commit with detailed message, push
```

### Code-First Alternative

**For plans with extensive code (PLAN-004 style):**

1. **Write all code first (40 min):**
   ```javascript
   // Prepare complete implementations:
   // - file1.js (100 lines)
   // - file2.css (50 lines)
   // - file3.html (30 lines)
   // Write in comments or separate scratch file
   ```

2. **Copy template and insert code (15 min):**
   ```bash
   cp TEMPLATE → PLAN-00X
   # Fill header quickly
   # Paste pre-written code into Phase 2
   ```

3. **Fill other sections (45 min):**
   - Phases 1, 3-6 reference the code
   - Testing based on code features
   - Troubleshooting based on code complexity

4. **Finalize (20 min):**
   - Completion checklist
   - Review
   - Commit

### Key Principles

**✅ DO:**
- Include complete code (no placeholders like `// existing code...`)
- Make code copy-paste ready (with imports, comments)
- Write specific testing steps (not generic)
- Include actual file paths and line numbers
- Provide exact commit message templates

**❌ DON'T:**
- Leave sections incomplete ("TODO: fill this later")
- Use generic placeholders ("[X minutes]" without calculating)
- Write partial code expecting implementation to "figure it out"
- Skip troubleshooting (causes issues later)
- Rush - incomplete plans slow implementation

### Why This Works

- **Prevents token limits:** Breaking into chunks avoids context overflow
- **Better quality:** Focus on one section at a time
- **Faster implementation:** Complete code = copy-paste-run
- **Easier review:** Each chunk is reviewable independently
- **No back-and-forth:** Everything needed is in the plan

---

## ⚠️ Common Pitfalls

### ❌ Don't
- Skip testing phases
- Commit without testing
- Use vague commit messages
- Leave placeholders in code
- Skip documentation updates
- Make breaking changes without migration guide
- **Create incomplete plans to "save time" (actually wastes time)**

### ✅ Do
- Test after each phase
- Commit frequently with clear messages
- Complete all checklists
- Use production-ready code
- Update all docs
- Provide rollback procedures
- **Spend 2 hours on complete plan = save 4 hours on implementation**

---

## 🎯 Success Criteria

An implementation is **complete** when:

- ✅ All functionality works identically (or better)
- ✅ No console errors
- ✅ All tests pass
- ✅ Code is documented (JSDoc, comments)
- ✅ version.json updated
- ✅ CHANGELOG.md updated
- ✅ meta.module.json updated
- ✅ Changes committed to Git
- ✅ Changes pushed to GitHub
- ✅ Plan status marked ✅ COMPLETED

---

## 📞 Need Help?

- **Template details:** See `TEMPLATE-IMPLEMENTATION-PLAN.md`
- **Workflow guide:** See `docs/dev/plans/README.md`
- **Modularity goals:** See `docs/dev/MODULARITY_IMPROVEMENTS.md`
- **Project overview:** See `docs/README.md`

---

## 🚀 Next Steps

After creating your plan:

1. **Review the plan** - Make sure all sections are complete
2. **Start Phase 1** - Begin with preparation
3. **Update status** - Mark as 🔵 In Progress
4. **Follow sequentially** - Complete phases in order
5. **Test thoroughly** - After each phase
6. **Document everything** - Update all files
7. **Commit & push** - Share your work
8. **Mark complete** - Update status to ✅

---

**Remember:** The template is a guide, not a prison. Adapt it to your needs, but maintain the core structure for consistency.

---

**Last Updated:** 2025-10-20  
**Version:** 1.0  
**Author:** Gerasimos Makis Mouzakitis
