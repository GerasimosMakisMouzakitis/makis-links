# 🚀 Quick Reference: Implementation Template Usage

A one-page guide for using the implementation plan template system.

---

## 📋 Quick Start (3 Steps)

### 1️⃣ Copy Template
```bash
cp docs/dev/plans/TEMPLATE-IMPLEMENTATION-PLAN.md \
   docs/dev/plans/PLAN-00X-YOUR-FEATURE.md
```

### 2️⃣ Customize Header
```markdown
**Task:** Create data-driven links system
**Priority:** 🔴 HIGH
**Status:** 🟡 READY TO START
**Effort:** 2-3 hours
**Impact:** ⭐⭐⭐⭐⭐
```

### 3️⃣ Execute Phases
- Phase 1: Preparation (⚠️ **BACKUP FILES FIRST** with .backup suffix, create dirs)
- Phase 2: Implementation (write code)
- Phase 3: Integration (connect components)
- Phase 4: Testing (visual, console, network)
- Phase 5: Documentation (version.json, CHANGELOG)
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

## 📚 Documentation Updates

Every implementation must update:

1. **version.json**
   - Increment version number
   - Update timestamp
   - Add/update module entries

2. **CHANGELOG.md**
   - Add new version entry
   - List changes (Added, Changed, Improved, Fixed)
   - Include author name

3. **meta.module.json**
   - Add new module entries
   - Update dependencies
   - Update version numbers

4. **README.md** (if needed)
   - Update features list
   - Update file structure
   - Update usage instructions

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

## ⚠️ Common Pitfalls

### ❌ Don't
- Skip testing phases
- Commit without testing
- Use vague commit messages
- Leave placeholders in code
- Skip documentation updates
- Make breaking changes without migration guide

### ✅ Do
- Test after each phase
- Commit frequently with clear messages
- Complete all checklists
- Use production-ready code
- Update all docs
- Provide rollback procedures

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
