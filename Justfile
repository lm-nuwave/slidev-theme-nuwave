SKILL_REPO := env_var_or_default("SKILL_REPO", "~/workspace/github.com/lukemcguire/lm-agent-lib")
default_dir := "agents"

# List available skills and whether they're active in this project
[group('discovery')]
skill-ls:
    @echo "SKILL                     DESCRIPTION                              ACTIVE"
    @echo "─────────────────────────────────────────────────────────────────────────"
    @for d in {{SKILL_REPO}}/skills/*/; do \
        name=$(basename "$d"); \
        [ -f "$d/SKILL.md" ] || continue; \
        desc=$(grep -m1 '^description:' "$d/SKILL.md" 2>/dev/null \
            | sed 's/description: *//' \
            | tr -d '"' \
            | awk '{ if (length($0) > 40) print substr($0, 1, 37) "..."; else print }'); \
        active=""; \
        [ -L ".agents/skills/$name" ] && active="✓ .agents"; \
        [ -L ".claude/skills/$name" ] && active="$active ✓ .claude"; \
        printf "%-25s %-40s %s\n" "$name" "$desc" "$active"; \
    done

# List skills currently active in this project
[group('discovery')]
skill-ls-active:
    @echo "Active skills in this project:"
    @for dir in .agents/skills .claude/skills; do \
        [ -d "$$dir" ] || continue; \
        echo "  $$dir/"; \
        for s in "$$dir"/*/; do \
            [ -e "$$s" ] && echo "    $$(basename $$s)"; \
        done; \
    done

# List available agents and whether they're active in this project
[group('discovery')]
agent-ls:
    @echo "AGENT                     DESCRIPTION                              ACTIVE"
    @echo "─────────────────────────────────────────────────────────────────────────"
    @for f in {{SKILL_REPO}}/agents/*.md; do \
        [ -f "$f" ] || continue; \
        name=$(basename "$f" .md); \
        desc=$(grep -m1 '^description:' "$f" 2>/dev/null \
            | sed 's/description: *//' \
            | tr -d '"' \
            | awk '{ if (length($0) > 40) print substr($0, 1, 37) "..."; else print }'); \
        active=""; \
        [ -L ".agents/agents/$name.md" ] && active="✓ .agents"; \
        [ -L ".claude/agents/$name.md" ] && active="$active ✓ .claude"; \
        printf "%-25s %-40s %s\n" "$name" "$desc" "$active"; \
    done

# List agents currently active in this project
[group('discovery')]
agent-ls-active:
    @echo "Active agents in this project:"
    @for dir in .agents/agents .claude/agents; do \
        [ -d "$$dir" ] || continue; \
        echo "  $$dir/"; \
        for a in "$$dir"/*.md; do \
            [ -e "$$a" ] && echo "    $$(basename $$a .md)"; \
        done; \
    done

# Add a skill from the library to this project
[group('project-skills')]
skill-add skill agent_dir=default_dir:
    @mkdir -p .{{agent_dir}}/skills
    @ln -sf {{SKILL_REPO}}/skills/{{skill}} .{{agent_dir}}/skills/{{skill}}
    @echo "Added {{skill}} → .{{agent_dir}}/skills/{{skill}}"

# Remove a skill from this project
[group('project-skills')]
skill-rm skill agent_dir=default_dir:
    @rm -f .{{agent_dir}}/skills/{{skill}}
    @echo "Removed {{skill}} from .{{agent_dir}}/skills/"

# Add an agent from the library to this project
[group('project-agents')]
agent-add agent agent_dir=default_dir:
    @mkdir -p .{{agent_dir}}/agents
    @ln -sf {{SKILL_REPO}}/agents/{{agent}} .{{agent_dir}}/agents/{{agent}}.md
    @echo "Added {{agent}} → .{{agent_dir}}/agents/{{agent}}.md"

# Remove an agent from this project
[group('project-agents')]
agent-rm agent agent_dir=default_dir:
    @rm -f .{{agent_dir}}/agents/{{agent}}.md
    @echo "Removed {{agent}} from .{{agent_dir}}/agents/"
